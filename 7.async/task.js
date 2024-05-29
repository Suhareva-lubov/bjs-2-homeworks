class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, func) {
        if(!time || !func) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if(this.alarmCollection.some(item => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
          }

        return this.alarmCollection.push({
            callback: func,
            time: time,
            canCall: true
        })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString('ru-Ru', { hour: '2-digit', minute: '2-digit'});
    }

    start() {
        if(this.intervalId){
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(item => {
                if(item.time === this.getCurrentFormattedTime() && item.canCall === true) {
                   item.canCall = false;
                   item.callback(); 
                }
                }) 
        }, 1000); 
    }

    stop(number){
        clearInterval(number);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(item => {
            item.canCall = true;
        })
    }

    clearAlarms() {
        this.stop(this.intervalId);
        this.alarmCollection = [];
    }
}


/*let clock = new AlarmClock()
console.log("Запустилось")
clock.addClock("18:59", () => console.log("Привет"));
console.log(clock.alarmCollection[0]);
console.log(clock.alarmCollection[0].callback)
clock.start();*/