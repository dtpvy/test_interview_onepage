import "./index.css";
import SeeMore from "../SeeMore";

function WorkItem(props) {
  const { item } = props;
  return (
    <Item {...props}>
      <div className="item--work">
        <div className="item--work__title">{item.name}</div>
        <div className="item--work__description">{item.description}</div>
        <div className="item--work__see-more">
          <SeeMore title="See Project" />
        </div>
      </div>
    </Item>
  );
}

function ProfileItem(props) {
  const { item } = props;
  return (
    <Item {...props}>
      <div className="item--profile">
        <div className="item--profile__title">{item.name}</div>
        <div className="item--profile__description">{item.description}</div>
      </div>
    </Item>
  );
}

function ServiceItem({ item }) {
  return (
    <div className="item item--service__container">
      <div className="item--service">
        <div className="item--service__title">{item.name}</div>
        <div className="item--service__description">{item.description}</div>
        <SeeMore title="See Project" />
      </div>
      <div className="item--service__other">Starting at $400</div>
    </div>
  );
}

function Item({ item, children, index, isShowDivider }) {
  return (
    <>
      <div className="item">
        <img className="item__image" alt="" src={item.imageUrl} />
        <div className="item__content--toggle">{children}</div>
        <div
          className={`item__content ${
            index % 2 ? "item__content--right" : "item__content--left"
          } `}
        >
          {children}
        </div>
      </div>
      {isShowDivider && <div className="item__divider"></div>}
    </>
  );
}

export { WorkItem, ProfileItem, ServiceItem };
