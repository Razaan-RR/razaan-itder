import { useEffect, useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        fetch('https://itder.org/api/get-course-list')
            .then(res => res.json())
            .then(result => {
                setCourses(result.courseData);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const handleClick = (course) => {
        const isExist = cart.find(item => item.id === course.id);
        
        if (isExist) {
            alert("This course is already in your cart!");
        } else {
            setCart([...cart, course]);
            alert("Course added to cart successfully!");
        }
    };

    if (loading) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="m-mt_16px">
            <div className="flex justify-end p-4">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
                    Cart: {cart.length} Items
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses.map((course) => {
                    const discountPercent = Math.round(
                        ((course.regular_price - course.discount_price) / course.regular_price) * 100
                    );

                    return (
                        <div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden border">
                            <div className="relative">
                                <img
                                    src={course.photo}
                                    alt={course.course_name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-0 left-0 p-2 bg-black bg-opacity-50">
                                    <h3 className="text-white text-lg font-bold">
                                        {course.course_name}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-4">
                                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                    {course.course_name}
                                </h2>

                                <div className="flex items-center justify-between mb-4">
                                    <span className="flex text-blue-500 text-md">★★★★★</span>
                                    <span className="ml-2 text-gray-600 text-md font-bold">
                                        {course.trainer_data?.name}
                                    </span>
                                </div>

                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {course.course_details.replace(/<[^>]+>/g, '')}
                                </p>

                                <hr />

                                <div className="mt-4 flex justify-between items-center">
                                    <div>
                                        <span className="line-through text-gray-400 text-sm">
                                            Tk {course.regular_price}
                                        </span>
                                        <span className="text-green-600 text-md font-bold ml-2">
                                            -{discountPercent}%
                                        </span>
                                        <span className="text-black text-lg font-bold ml-2">
                                            Tk {course.discount_price}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4 flex gap-2">
                                    <button 
                                        onClick={() => handleClick(course)} 
                                        className="bg-blue-500 text-white py-2 px-4 rounded w-full font-bold text-md hover:bg-blue-600 transition-colors"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Courses;
