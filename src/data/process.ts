export type ProcessStep = {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Idea', description: 'Define the problem.' },
  { number: '02', title: 'Architecture', description: 'Design the system.' },
  { number: '03', title: 'Build', description: 'Develop the product.' },
  { number: '04', title: 'Ship', description: 'Deploy and make it usable.' },
  { number: '05', title: 'Iterate', description: 'Gather feedback and improve.' },
];
