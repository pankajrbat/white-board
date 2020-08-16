export const menus = [
    {
        name: 'pencil',
        type: 'source-over',
        value: '#46545f',
        lineWidth: 1,
        subMenus: [{
            name: 'stroke1',
            lineWidth: 1,
        },{
            name: 'stroke3',
            lineWidth: 3,
        },{
            name: 'stroke5',
            lineWidth: 5,
        },{
            name: 'stroke-primary',
            color: 'primary',
            value: '#46545f'
        },{
            name: 'stroke-red',
            color: 'red',
            value: 'red'
        },{
            name: 'stroke-green',
            color: 'green',
            value: 'green'
        },{
            name: 'stroke-yellow',
            color: 'yellow',
            value: 'yellow'
        }]
    },
    {
        name: 'highlighter',
        value: 'rgb(70, 84, 95, 0.3)',
        type: 'source-over',
        lineWidth: 5,
        subMenus: [{
            name: 'stroke-primary',
            color: 'primary',
            value: '#46545f'
        },{
            name: 'stroke-red',
            color: 'rgb(255, 0, 0, 0.5)',
            value: 'rgb(255, 0, 0, 0.5)'
        },{
            name: 'stroke-green',
            color: 'rgb(0, 255, 0, 0.5)',
            value: 'rgb(0, 255, 0, 0.5)'
        },{
            name: 'stroke-yellow',
            color: 'rgb(255, 255, 0, 0.5)',
            value: 'rgb(255, 255, 0, 0.5)'
        }]
    },
    {
        name: 'eraser',
        type: 'destination-out',
        lineWidth: 10
    }
]