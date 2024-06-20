export const SubMenu = [
    {
        name: 'Mans Numo',
        state: 'inactive',
        submenu: []
    },
    {
        name: 'Vadība',
        state: 'inactive',
        submenu: []
    },
    {
        name: ' Pro Numo',
        state: 'active',
        submenu: [
            {
                "name": "Banka",
                "icon": "cil:bank",
                "url": "/banka",
                "state": "active"
            },
            {
                "name": "Klienti",
                "icon": "cil:people",
                "url": "/klienti",
                "state": "inactive"
            },
            {
                "name": "Darījumi",
                "icon": "cil:note-add",
                "url": "/darījumi",
                "state": "inactive"
            },
            {
                "name": "Kredīti",
                "icon": "cil:note-add",
                "url": "/kredīti",
                "state": "inactive"
            },
            {
                "name": "Statistika",
                "icon": "cil:chart-line",
                "url": "/statistika",
                "state": "inactive"
            }
        ]
    }

]