import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";


function AQIChart({ data }) {
  return (
    <div className="flex justify-center my-5">
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="aqi" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default AQIChart;
