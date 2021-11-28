const headers = [
  {
    text: 'Summary Type',
    value: 'summaryType'
  },
  {
    text: 'Today',
    value: 'today'
  },
  { text: 'Last Week', value: 'lastWeek' },
  { text: 'Month-To-Date', value: 'mtd' }
]

export const tireActivitySummaries = {
  headers,

  tableData: [
    {
      summaryType: 'Tires Inspected',
      today: 320,
      lastWeek: 1600,
      mtd: 6400
    },
    {
      summaryType: 'Tires Quoted',
      today: 52,
      lastWeek: 257,
      mtd: 1020
    },
    {
      summaryType: 'Tires Sales',
      today: 18,
      lastWeek: 62,
      mtd: 215
    }
  ]
}

export const vehicleActivitySummaries = {
  headers,

  tableData: [
    {
      summaryType: 'Total Vehicles Inspected',
      today: 80,
      lastWeek: 400,
      mtd: 1600
    },
    {
      summaryType: 'Vehicles With VIN',
      today: 74,
      lastWeek: 368,
      mtd: 1472
    },
    {
      summaryType: 'Vehicles With Tire Quote',
      today: 13,
      lastWeek: 64,
      mtd: 255
    }
  ]
}
