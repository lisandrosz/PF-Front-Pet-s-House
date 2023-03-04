// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const hash = (value: string) => {
  const arrChanin = value.split('');
  const sortArr = arrChanin.reverse();
  const arrJoin = sortArr.join('');
  return arrJoin;
};
export default hash;
