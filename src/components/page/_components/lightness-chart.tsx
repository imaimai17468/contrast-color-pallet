"use client";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const description = "A line chart with dots";

const chartConfig = {
  lightness: {
    label: "Lightness",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

type LightnessChartProps = {
  lightnessList: { x: number; y: number }[];
};

export function LightnessChart({ lightnessList }: LightnessChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lightness Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={lightnessList}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="x"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.toFixed(2)}
            />
            <YAxis
              dataKey="y"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.toFixed(2)}
              label={{
                value: "Lightness",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="y"
              type="natural"
              stroke="var(--color-lightness)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-lightness)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
