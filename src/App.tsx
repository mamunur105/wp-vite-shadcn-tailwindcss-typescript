


export default function App() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-sm p-6 bg-white rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Hello, Tailwind + TypeScript!
        </h1>
        <p className="text-gray-600">
        This is a simple example using <span className="font-medium">Vite</span>,
        <span className="font-medium"> React</span>, <span className="font-medium">TypeScript</span>,
    and <span className="font-medium">Tailwind CSS</span>.
    </p>
    <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Click Me
    </button>
    </div>
    </div>
);
}