import { Button } from "@/components/ui/button"

export default function App() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="max-w-sm p-6 bg-white rounded-2xl shadow-lg text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  Hello, Tailwind + TypeScript!
                </h1>
                <p className="text-gray-600">
                    This is a simple example using <span className="font-medium">Vite</span>,
                    <span className="font-medium"> React</span>, <span className="font-medium">TypeScript</span>,
                and <span className="font-medium">Tailwind CSS</span>.
                </p>
                <Button variant="outline">Button</Button>
            </div>
        </div>
    );
}