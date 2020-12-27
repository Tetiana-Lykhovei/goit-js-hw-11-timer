import refs from "./refs";

const timer = 
    setInterval(() => {
    const currentDate = Date.now();
    const targetDate = new Date('Jan 01 2021');
const deltaTime = targetDate - currentDate;
    
        setTime(deltaTime);

    }, 1000);
    
function setTime(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;

}

function pad(value) {
    return String(value).padStart(2, "0");
}
