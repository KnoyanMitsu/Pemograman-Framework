import React from 'react';
import { useRouter } from 'next/router';

const MainSection = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        router.push("/auth/login");
    };

    return (
        <main className="flex flex-col items-center justify-center p-8 min-h-[50vh]">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
                <h2 className="text-2xl font-semibold mb-6">User Actions</h2>
                <p className="text-gray-600 mb-8">You are currently logged in. Here, you will see your available products and items.</p>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-md transition-colors w-full"
                >
                    Logout
                </button>
            </div>
        </main>
    );
};

export default MainSection;
