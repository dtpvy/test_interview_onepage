import { WorkItem, ProfileItem, ServiceItem } from "../Item";
import useWindowDimensions from "./useWindowDimensions";
import "./index.css";
import { useEffect, useState } from "react";

function ListItem({ type, items = [] }) {
  const { width } = useWindowDimensions();
  const [isSeeAll, setShowAll] = useState(false);
  const [currItems, setCurrItems] = useState([]);

  useEffect(() => {
    const _showSeeAll = width <= 912;
    if (_showSeeAll && items.length > 4) {
      setCurrItems(items.slice(0, 3));
      setShowAll(true);
    } else {
      setCurrItems(items);
      setShowAll(false);
    }
  }, [width]);

  const handleShowAll = () => {
    console.log(isSeeAll);
    if (isSeeAll) {
      setCurrItems(items);
      setShowAll(false);
    } else {
      setCurrItems(items.slice(0, 3));
      setShowAll(true);
    }
  };

  return (
    <div className={`list-item list-item__${type}`}>
      {currItems.map((item, index) => {
        switch (type) {
          case "work": {
            return (
              <WorkItem
                key={item.id}
                item={item}
                index={index}
                isShowDivider={index !== currItems.length - 1}
              />
            );
          }
          case "profile": {
            return <ProfileItem key={item.id} item={item} index={index} />;
          }
          case "service": {
            return <ServiceItem key={item.id} item={item} />;
          }
          default:
            return <WorkItem key={item.id} item={item} index={index} />;
        }
      })}
      {items.length > 4 && (
        <div
          onClick={() => {
            handleShowAll();
          }}
          className="see-all__button"
        >
          {isSeeAll ? "See all" : "See less"}
        </div>
      )}
    </div>
  );
}

export default ListItem;
