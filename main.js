const canvas = document.getElementById('canvas');
canvas.width = 200;

const ctx = canvas.getContext('2d');
const laneCount = 3;
const road = new Road(canvas.width / 2, canvas.width * 0.9, laneCount);
const car = new Car(road.getLaneCenter(Math.floor(laneCount / 2)), 100, 30, 50);

const animate = () => {
    car.update();

    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.75);
    road.draw(ctx);
    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
}
animate();