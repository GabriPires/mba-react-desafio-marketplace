import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { getViewPerDaysOnLastMonth } from '@/api/metrics/views-per-day-on-last-month'

export function ViewsPerDayOnMonthGraphic() {
  const { data: views, isLoading: isLoadingViews } = useQuery({
    queryKey: ['views-per-day-on-month'],
    queryFn: async () => {
      const response = await getViewPerDaysOnLastMonth()

      const parsedResponse = response.viewsPerDay.map((view) => {
        const day = dayjs(view.date).format('DD')
        return { ...view, parsedDate: day }
      })

      return parsedResponse
    },
  })

  return (
    <div className="mt-7">
      {isLoadingViews ? (
        <div className="animate-pulse w-full h-full bg-marketplace-gray-100/10 rounded-lg"></div>
      ) : (
        <ResponsiveContainer width={719} height={266}>
          <LineChart data={views}>
            <CartesianGrid
              vertical={false}
              strokeDasharray={'6'}
              stroke="#94949420"
            />
            <XAxis
              dataKey="parsedDate"
              axisLine={false}
              tickLine={false}
              fontSize={12}
              color={'#949494'}
              interval={0}
              padding={{ right: 40 }}
            />
            <YAxis
              dataKey="amount"
              axisLine={false}
              tickLine={false}
              fontSize={12}
              color={'#949494'}
              padding={{ bottom: 40 }}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#5EC5FD"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
