import { formatDate } from "./formatDate";

export function handleInput(e, kind, data, setData){
    if(e && e.target){
        switch(e.target.name) {
            case "situation":
                setData( data = { ...data,
                    situation: e.target.value
                })
                break;
            case "description":
                setData( data = { ...data,
                    description: e.target.value
                })
                break;
            case "withdrawn_by":
                setData( data = { ...data,
                    withdrawn_by: e.target.value
                })
                break;
            case "county":
                setData( data = { ...data,
                    county: e.target.value
                })
                break;
            case "process_number":
                setData( data = { ...data,
                    process_number: e.target.value
                })
                break;
            case "name_counterpart":
                setData( data = { ...data,
                    name_counterpart: e.target.value
                })
                break;
            case "stick":
                setData( data = { ...data,
                    stick: e.target.value
                })
                break;
            case "requestedBy":
                setData( data = { ...data,
                    requestedBy: e.target.value
                })
                break;
            case "reasonReturn":
                setData( data = { ...data,
                    reasonReturn: e.target.value
                })
                break;
            case "quantity":
                setData( data = { ...data,
                    quantity: e.target.value.replace(/[^\d.-]/g, '')
                })
                break;
            case "qtd_people":
                setData( data = { ...data,
                    qtd_people: e.target.value.replace(/[^\d.-]/g, '')
                })
                break;
            case "password":
                setData( data = { ...data,
                    password: e.target.value
                })
                break;
            case "confirmPassword":
                setData( data = { ...data,
                    confirmPassword: e.target.value
                })
                break;
            case "obs":
                setData( data = { ...data,
                    obs: e.target.value
                })
                break;
            case "raw_material":
                setData( data = { ...data,
                    raw_material: e.target.value.replace(/[^\d.-]/g, '')
                })
                break;
            case "tax":
                setData( data = { ...data,
                    tax: e.target.value.replace(/[^\d.-]/g, '')
                })
                break;
            case "commission":
                setData( data = { ...data,
                    commission: e.target.value.replace(/[^\d.-]/g, '')
                })
                break;
            case "machine":
                setData( data = { ...data,
                    machine: e.target.value.replace(/[^\d.-]/g, '')
                })
                break;
            case "final_cost":
                setData( data = { ...data,
                    final_cost: e.target.value.replace(/[^\d.-]/g, '')
                })
                break;
            case "sale":
                setData( data = { ...data,
                    sale: e.target.value.replace(/[^\d.-]/g, '')
                })
                break;
            case "stock_min":
                setData( data = { ...data,
                    stock_min: e.target.value.replace(/[^\d.-]/g, '')
                })
                break;
            case "purchase_margin":
                setData( data = { ...data,
                    purchase_margin: e.target.value.replace(/[^\d.-]/g, '')
                })
                break;
            case "project":
                setData( data = { ...data,
                    project: e.target.value
                })
                break;
            case "responsable":
                setData( data = { ...data,
                    responsable: e.target.value
                })
                break;
            case "referenceProduct":
                setData( data = { ...data,
                    referenceProduct: e.target.value
                })
                break;
            case "targetAudience":
                setData( data = { ...data,
                    targetAudience: e.target.value
                })
                break;
            case "aroma":
                setData( data = { ...data,
                    aroma: e.target.value
                })
                break;
            case "portion":
                setData( data = { ...data,
                    portion: e.target.value
                })
                break;
            case "size":
                setData( data = { ...data,
                    size: e.target.value
                })
                break;
            case "color":
                setData( data = { ...data,
                    color: e.target.value
                })
                break;
            case "dyes":
                setData( data = { ...data,
                    dyes: e.target.value
                })
                break;
            case "price":
                setData( data = { ...data,
                    price: e.target.value.replace(/[^\d.-]/g, '')
                })
                break;
            case "local":
                setData( data = { ...data,
                    local: e.target.value
                })
                break;
            case "material":
                setData( data = { ...data,
                    material: e.target.value
                })
                break;
            default:
                return null
        }
    }
    if(e && e._locale && kind === "begin"){
        let date = formatDate(e.format())
        setData( data = { ...data,
            begin: date
        })
    }else if(e && e._locale && kind === "end"){
        let date = formatDate(e.format())
        setData( data = { ...data,
            end: date
        })
    }else if(e && e._locale && kind === "date"){
        let date = formatDate(e.format())
        setData( data = { ...data,
            date: date
        })
    }else if(e && e._locale && kind === "dateTo"){
        let date = formatDate(e.format())
        setData( data = { ...data,
            dateTo: date
        })
    }else if(e && e._locale && kind === "dateDelivered"){
        let date = formatDate(e.format())
        setData( data = { ...data,
            dateDelivered: date
        })
    }
}