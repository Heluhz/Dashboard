function AQIInfo({ data }) {
    const getAQIColor = (aqi) => {
      if (aqi <= 50) return "bg-green-500";
      if (aqi <= 100) return "bg-yellow-500";
      if (aqi <= 150) return "bg-orange-500";
      return "bg-red-500";
    };
  
    return (
      <div className="text-center my-5">
        <h2 className="text-xl font-semibold">Air Quality in {data.city}</h2>
        <div className={`text-white p-4 rounded-md ${getAQIColor(data.aqi)}`}>
          <p className="text-2xl font-bold">AQI: {data.aqi}</p>
          <p>{data.message}</p>
        </div>
      </div>
    );
  }
  
  export default AQIInfo;
  