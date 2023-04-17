import React, { Fragment } from "react";
import { Table, Input, Button, Row, Tooltip, Popconfirm, Progress, Tag, Space } from 'antd';
import { FileSearchOutlined, CheckOutlined  , SearchOutlined, LockOutlined, EditOutlined, PrinterOutlined } from "@ant-design/icons";
import Highlighter from 'react-highlight-words';
import { DeleteOutlined } from "@ant-design/icons";
import { FcOk, FcHighPriority } from "react-icons/fc"
//const colors = ["geekblue", "green", "cyan", "blue", "purple", "volcano", "magenta", "gold"];
class AntTable extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
        columns: [],
        selectedRowKeys: [], 
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
            <Input
                ref={node => {
                    this.searchInput = node;
                }}
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys[0]}
                onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Space>
            <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
            >
                Procurar
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Limpar
            </Button>
            </Space>
        </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
        if (visible) {
            setTimeout(() => this.searchInput.select());
        }
        },
        render: text =>
        this.state.searchedColumn === dataIndex ? (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ) : (
            text
        ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    componentDidMount(){
        let columns = this.props.columns.map(c => {
            if(c.key !== "action" && c.key !== "progressBar" && c.key !== "view" && c.key !== "tag" && c.key !== "tagValues" && c.key !== "tagWithoutLink" && c.key !== "available" && c.key !== "available"){
                if(c.fix){
                    if(c.withoutSearch){
                        return {
                            title: c.title,
                            dataIndex: c.dataIndex,
                            key: c.key,
                            width: c.width,
                            fixed: c.fixed,
                            sorter: (a, b) => {
                                if(c.sortKind === "string") return a[c.dataIndex].localeCompare(b[c.dataIndex])
                                if(c.sortKind === "number") return a[c.dataIndex] - b[c.dataIndex]
                                if(c.sortKind === "date") return new Date(b[c.dataIndex]) - new Date(a[c.dataIndex])
                            },
                            sortDirections: ['descend', 'ascend'],
                        }
                    }else{
                        return {
                            title: c.title,
                            dataIndex: c.dataIndex,
                            key: c.key,
                            width: c.width,
                            fixed: c.fixed,
                            sorter: (a, b) => {
                                if(c.sortKind === "string") return a[c.dataIndex].localeCompare(b[c.dataIndex])
                                if(c.sortKind === "number") return a[c.dataIndex] - b[c.dataIndex]
                                if(c.sortKind === "date") return new Date(b[c.dataIndex]) - new Date(a[c.dataIndex])
                            },
                            sortDirections: ['descend', 'ascend'],
                            ...this.getColumnSearchProps(c.dataIndex, c.searchName),
                        }
                    }
                }else{
                    if(c.withoutSearch && c.withoutSort){
                        return {
                            title: c.title,
                            dataIndex: c.dataIndex,
                            key: c.key,
                            width: c.width
                        }
                    }else if(c.withoutSearch){
                        return {
                            title: c.title,
                            dataIndex: c.dataIndex,
                            key: c.key,
                            width: c.width,
                            sorter: (a, b) => {
                                if(c.sortKind === "string") return a[c.dataIndex].localeCompare(b[c.dataIndex])
                                if(c.sortKind === "number") return a[c.dataIndex] - b[c.dataIndex]
                                if(c.sortKind === "date") return new Date(b[c.dataIndex]) - new Date(a[c.dataIndex])
                            },
                            sortDirections: ['descend', 'ascend']
                        }
                    }else if(c.withoutSort){
                        return {
                            title: c.title,
                            dataIndex: c.dataIndex,
                            key: c.key,
                            width: c.width,
                            ...this.getColumnSearchProps(c.dataIndex, c.searchName),
                        }
                    }else{
                        return {
                            title: c.title,
                            dataIndex: c.dataIndex,
                            key: c.key,
                            width: c.width,
                            sorter: (a, b) => {
                                if(c.sortKind === "string") return a[c.dataIndex].localeCompare(b[c.dataIndex])
                                if(c.sortKind === "number") return a[c.dataIndex] - b[c.dataIndex]
                                if(c.sortKind === "date") return new Date(b[c.dataIndex]) - new Date(a[c.dataIndex])
                            },
                            sortDirections: ['descend', 'ascend'],
                            ...this.getColumnSearchProps(c.dataIndex, c.searchName),
                        }
                    }
                }
            }else if(c.key === "available"){
                return {
                    title: c.title,
                    dataIndex: c.dataIndex,
                    key: c.key,
                    width: c.width,
                    ...this.getColumnSearchProps(c.dataIndex, c.searchName),
                    render: (c, text, index) => 
                        <Tag color={c === "ENTRADA" ? "#108ee9" : "#f04864"} key={c}>
                            {c}
                        </Tag>,
                }
            }else if(c.key === "tag"){
                let color = c.color;
                return {
                    title: c.title,
                    dataIndex: c.dataIndex,
                    key: c.key,
                    width: c.width,
                    ...this.getColumnSearchProps(c.dataIndex, c.searchName),
                    render: (c, text, index) => 
                        <Tag color={color} key={c}>
                            {c}
                        </Tag>,
                }
            }else if(c.key === "tagValues"){
                //let color = c.color;
                return {
                    title: c.title,
                    dataIndex: c.dataIndex,
                    key: c.key,
                    width: c.width,
                    ...this.getColumnSearchProps(c.dataIndex, c.searchName),
                    render: (c, text, index) => 
                        <Tag key={c} color={ (typeof c === "string" && parseFloat(c) > 0) || c > 0 ? "#87d068" : "#D54241" }>
                            R$ {typeof c === "string" ? c : c.toFixed(2)}
                        </Tag>,
                }
            }else if(c.key === "progressBar"){
                return {
                    title: c.title,
                    dataIndex: 'progressBar',
                    key: c.key,
                    width: c.width,
                    render: c => 
                    <Fragment>
                        { c === 100 ? <Progress percent={c} size="small" /> : <Progress percent={c} size="small" status="active" /> }
                    </Fragment>
                }
            }else if(c.key === "available"){
                return {
                    title: c.title,
                    dataIndex: c.dataIndex,
                    key: c.key,
                    width: c.width,
                    render: c => 
                    <Fragment>
                        { c === 'SIM' ? <FcOk style={{fontSize: 20}}/> : <FcHighPriority style={{fontSize: 20}}/> }
                    </Fragment>
                }
            }else{
                return {
                    title: c.title,
                    dataIndex: this.props.actionItem ? this.props.actionItem : 'proposta',
                    key: c.key,
                    fixed: c.fixed,
                    render: (c, text) => 
                    <Fragment>
                        <Row>
                            {
                                this.props.btnProposalInfo ? 
                                    <Tooltip title="Exibir" placement="left">
                                        <Button 
                                            shape="circle" 
                                            style={{ marginLeft: 10, color:"white", backgroundColor:"#33aa55"}} 
                                            icon={<FileSearchOutlined/>} 
                                            onClick={() => this.props.showDrawer("PROPOSAL", text)}
                                        />                             
                                    </Tooltip>
                                : null
                            }
                            {
                                this.props.btnEntryProposal ?
                                    <Popconfirm
                                        title="Tem certeza que deseja dar entrada no pedido?"
                                        onConfirm={() => this.props.sendHenri(c)}
                                        onCancel={this.props.cancel}
                                        okText="Sim"
                                        cancelText="Não"
                                    >
                                        <Tooltip title="Dar entrada no Pedido" placement="right">
                                            <Button 
                                                shape="circle" 
                                                style={{ marginLeft: 10, color:"white", backgroundColor:"#33aa55", border: "none"}} 
                                                type="primary"
                                                icon={<CheckOutlined/>} 
                                            />                             
                                        </Tooltip>
                                    </Popconfirm>
                                : null    
                            }
                            {
                                this.props.btnEdit ?
                                    <Tooltip title="Editar" placement="top">
                                        <Button 
                                            shape="circle" 
                                            type="primary"
                                            style={{ marginLeft: 10 }} 
                                            icon={<EditOutlined/>} 
                                            onClick={() => this.props.edit(c)}
                                        />                             
                                    </Tooltip>
                                : null
                            }
                            {
                                this.props.btnShowProposal ?
                                    <Tooltip title="Validar itens do pedido" placement="top">
                                        <Button 
                                            shape="circle" 
                                            type="primary"
                                            style={{ marginLeft: 10 }} 
                                            icon={<FileSearchOutlined/>} 
                                            onClick={() => this.props.showModalProposal(text)}
                                        />                             
                                    </Tooltip>
                                : null
                            }
                            { 
                                this.props.btnPassword ?
                                    <Tooltip title="Trocar Senha" placement="left">
                                        <Button 
                                            type="primary" 
                                            shape="circle" 
                                            icon={<LockOutlined/>} 
                                            style={{ marginLeft: 10 }} 
                                            onClick={() => this.props.showPasswordModal(c)} 
                                        />                               
                                    </Tooltip>
                                : null
                            }
                            {
                                this.props.btDelete ? 
                                    <Tooltip title="Excluir" placement="right">
                                        <Popconfirm title="Tem certeza que deseja deletar esse dado?" onConfirm={() => this.props.delete(c)} okText="Sim" cancelText="Não">
                                            <Button 
                                                shape="circle" 
                                                style={{ color: "white", backgroundColor: "#f25771", marginLeft: 5 }}
                                                icon={<DeleteOutlined />} 
                                            />
                                        </Popconfirm>
                                    </Tooltip>
                                : null
                            }
                            {
                                this.props.btPrint ? 
                                    <Tooltip title="Imprimir" placement="right">
                                        <Button 
                                            type="primary" 
                                            shape="circle" 
                                            icon={<PrinterOutlined/>} 
                                            style={{ marginLeft: 10 }} 
                                            onClick={() => this.props.showPrint(c, text)} 
                                        />  
                                    </Tooltip>
                                : null
                            }
                        </Row>
                    </Fragment>
                    ,
                }
            }
        });
        
        this.setState({
            columns
        })
    }

    render() {
        const rowSelection = {
            selectedRowKeys: this.props.selectedRowKeys,
            onChange: this.props.onSelectChange,
            hideDefaultSelections: true,
            onSelection: this.onSelection,
        }; 

        return( 
            <Fragment>
                {
                    this.props.scroll ? 
                        <Table 
                            style={{marginTop: "-16px"}}
                            columns={this.state.columns} 
                            dataSource={this.props.dataSource}
                            //scroll={{ x: 2960, y: 450 }} 
                            scroll={{ x: this.props.ScrollWidth ? this.props.ScrollWidth : 1760 }} 
                            rowKey={record => record.id}
                            //pagination={false} 
                            rowClassName={(record, index) => 
                                record._id === "Total" ? 
                                    "antTableRowTotal"
                                : (index % 2) === 0 ? 'antTableRowEven' : 'antTableRowOdd'
                            }
                            size="small" 
                            footer={() => {
                                return(
                                    <Fragment>
                                        { 
                                            this.props.footer ? 
                                                <Table 
                                                    bordered
                                                    style={{ padding: "2%" }} 
                                                    columns={this.props.footerColumns} 
                                                    dataSource={this.props.footerData} 
                                                    pagination={false} 
                                                    rowClassName={(record, index) => 
                                                        record._id === "Total" ? 
                                                            "antTableRowTotal"
                                                        : (index % 2) === 0 ? 'antTableRowEven' : 'antTableRowOdd'
                                                    }
                                                /> 
                                            : 
                                                null
                                        }
                                    </Fragment>
                                )
                            }}
                        />
                    :
                        <Table 
                            style={{marginTop: "-16px"}}
                            columns={this.state.columns} 
                            dataSource={this.props.dataSource} 
                            rowKey={record => record.id}
                            rowSelection={this.props.selectRow === true ? rowSelection : null}
                            rowClassName={(record, index) => 
                                record._id === "Total" ? 
                                    "antTableRowTotal"
                                : (index % 2) === 0 ? 'antTableRowEven' : 'antTableRowOdd'
                            }
                            size="small" 
                            footer={() => {
                                return(
                                    <Fragment>
                                        { 
                                            this.props.footer ? 
                                                <Table 
                                                    bordered
                                                    style={{ padding: "2%" }} 
                                                    columns={this.props.footerColumns} 
                                                    dataSource={this.props.footerData} 
                                                    pagination={false} 
                                                    rowClassName={(record, index) => 
                                                        record._id === "Total" ? 
                                                            "antTableRowTotal"
                                                        : (index % 2) === 0 ? 'antTableRowEven' : 'antTableRowOdd'
                                                    }
                                                /> 
                                            : 
                                                null
                                        }
                                    </Fragment>
                                )
                            }}
                        />
                }
            </Fragment>
        )
    }
}

export default AntTable