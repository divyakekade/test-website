import "./Sidebar.css";
import SidebarData from "./SidebarDataStudent";
function Sidebar(){
    const list=SidebarData.map(item=>(<span key={item.id} className="sidebar-options">{item.name}</span>))
    return(
        <div>
                <ul className="list-item">
                {list}
                </ul>
        </div>
    )
}
export default Sidebar;