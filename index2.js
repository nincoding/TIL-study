const setTimeoutPromise = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const main = async () => {
  setTimeoutPromise(1000).then(()=> {
    console.log('1초 지남!')
}) //1초 뒤 작업 예약

  console.log('안녕');

  await setTimeoutPromise(10000);
  console.log('10초 지남!');
}

main();