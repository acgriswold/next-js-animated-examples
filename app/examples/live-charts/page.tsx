import { Chart } from "@/components/examples/responsive-chart";

export default function LiveCharts() {
    let sales = [
        { date: "2023-04-30T12:00:00.00+00:00", value: 4 },
        { date: "2023-05-01T12:00:00.00+00:00", value: 6 },
        { date: "2023-05-02T12:00:00.00+00:00", value: 8 },
        { date: "2023-05-03T12:00:00.00+00:00", value: 7 },
        { date: "2023-05-04T12:00:00.00+00:00", value: 10 },
        { date: "2023-05-05T12:00:00.00+00:00", value: 12 },
        { date: "2023-05-06T12:00:00.00+00:00", value: 4 },
      ];
      let data = sales.map((d) => ({ ...d, date: new Date(d.date) }));

      
    return (
        <div className="group all-charts grid grid-cols-2 gap-x-4 gap-y-12 p-4 min-w-full max-w-full lg:min-w-[1400px] transition-all">
            <div className="col-span-2 h-60 max-w-full group-hover:max-w-2xl transition-all duration-1000 delay-100">
                <Chart data={data} />
            </div>
            <div className="h-40 max-w-full group-hover:max-w-md transition-all duration-700">
                <Chart data={data} />
            </div>
            <div className="h-40 max-w-full group-hover:max-w-sm transition-all duration-500 delay-300">
                <Chart data={data} />
            </div>
        </div>
    )
}