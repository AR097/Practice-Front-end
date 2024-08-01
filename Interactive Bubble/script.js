const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const engine = Engine.create();
const { world } = engine;

const width = window.innerWidth;
const height = window.innerHeight;

const render = Render.create({
    element: document.getElementById('container-base'),
    engine: engine,
    options: {
        width: width,
        height: height,
        backgroundColor: '#ffffff',
        wireframes: false
    }
});

Render.run(render);
Runner.run(Runner.create(), engine);

const walls = [
    Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, 40, height, { isStatic: true })
];
World.add(world, walls);

const createBall = (x, y) => {
    return Bodies.circle(x, y, 20, {
        render: {
            sprite: {
                texture: generateGradientTexture(20),
                xScale: 1,
                yScale: 1
            }
        }
    });
};

const generateGradientTexture = (radius) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = radius * 2;
    canvas.height = radius * 2;

    const gradient = context.createRadialGradient(radius, radius, 0, radius, radius, radius);
    gradient.addColorStop(0, 'rgb(162, 174, 175)');
    gradient.addColorStop(1, 'rgb(35, 121, 128)');

    context.fillStyle = gradient;
    context.beginPath();
    context.arc(radius, radius, radius, 0, Math.PI * 2);
    context.fill();

    return canvas.toDataURL();
};

const createRow = (y) => {
    const balls = [];
    const numberOfBalls = Math.floor(width / 70);
    for (let i = 0; i < numberOfBalls; i++) {
        balls.push(createBall(60 + i * 70, y));
    }
    return balls;
};

const rows = [];
for (let i = 0; i < 15; i++) {
    rows.push(...createRow(height - 20 - i * 70));
}
World.add(world, rows);

World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
    constraint: {
        render: { visible: false }
    }
}));

window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    render.canvas.width = newWidth;
    render.canvas.height = newHeight;
    render.options.width = newWidth;
    render.options.height = newHeight;
    Render.setPixelRatio(render, window.devicePixelRatio);
    Engine.update(engine, 1000 / 60); 
});
