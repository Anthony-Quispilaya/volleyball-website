function WeatherBox() {
    return (
        <div className="bg-blue-600 h-full p-4 text-white flex justify-center rounded-lg">
            <div className="flex flex-col">
                <div className="group flex flex-col gap-2 mb-5">
                    <div>I am Weather the expanded version of widget.</div>
                    <p>I display WeatherAPI content</p>
                </div>
                <h1 className="text-3xl font-bold mb-6">Today</h1>
                <div className="ml-2">
                    <h2 className="text-xl font-bold mb-2">Weather</h2>
                    <p className="text-lg">Sunny, 70°F</p>
                    <p className="text-sm">Humidity: 0%</p>
                    <p className="text-sm">Wind: 10 mph</p>
                </div>

            </div>
        </div>
    );
}

export default WeatherBox;