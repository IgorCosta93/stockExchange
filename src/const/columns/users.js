const columns = [{
    title: 'Nome',
    searchName: "nome",
    dataIndex: 'nome',
    key: 'nome',
    width: "25%",
    sortKind: "string",
}, {
    title: 'Usuario',
    searchName: "usuario",
    dataIndex: 'usuario',
    key: 'usuario',
    width: '25%',
    sortKind: "string"
},{
    title: 'Status',
    searchName: "status",
    dataIndex: 'STATUS',
    key: 'STATUS',
    width: '30%',
    sortKind: "string"
},{
    title: 'Ação',
    dataIndex: 'uf',
    key: 'action',
    width: '20%'
}];

export default columns;