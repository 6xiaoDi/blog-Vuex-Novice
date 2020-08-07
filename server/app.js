const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaBodyParser = require('koa-bodyparser')

let datas = {
    items: require('./data/items.json'),
    users: require('./data/users.json')
}

const app = new Koa();

let currentId = 20;

app.use( async (ctx, next) => {
    await next();
} );

app.use(KoaBodyParser());

const router = new KoaRouter();

router.get('/', async ctx => {
    ctx.body = 'api';
});

router.get('/items', async ctx => {
    let sort = ctx.request.query.sort || 'desc';
    let items = datas.items.sort((a, b) => sort === 'asc'  ? a.price - b.price : b.price - a.price);

    ctx.body = items;
});

router.get('/item/:id', async ctx => {
    let id = Number(ctx.params.id);
    let item = datas.items.find(item => item.id === id);

    if (!item) {
        ctx.throw(404, '没有该商品信息');
        return;
    }

    ctx.body = item;
    
});

router.post('/add', async ctx => {
    // console.log(ctx.request.body);
    let {name} = ctx.request.body;

    if (name.trim() === '') {
        ctx.body = {
            code: 1,
            message: '商品名称不能为空'
        }
        return;
    }

    let newData = {
        id: currentId++,
        name
    };

    datas.items.unshift(newData);

    ctx.body = {
        code: 0,
        message: '提交成功',
        data: newData
    }
})

app.use( router.routes() );

app.listen(7777);