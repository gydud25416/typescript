import { Address, Restaurant } from "./model/restaurant";

interface OwnProps{
    info:Restaurant;
    changeAddress(address:Address):void;
}

const Store:React.FC<OwnProps> = ({info, changeAddress})=>{

    return(
        <div>{info.name}</div>
    )

}

export default Store;