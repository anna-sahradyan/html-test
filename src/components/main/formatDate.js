const curr_tim = new Date();
const date = curr_tim.getDate();
const month = curr_tim.getMonth() + 1;
const year = curr_tim.getFullYear();

export const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${date < 10 ? '0' : ''}${date}`;
