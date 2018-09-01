const RectangleHeader = ({ image, text, link, classes }) => {
  return (
    <div className="linkedin-register-container">
      <div className="lines-img">
        <img src={image} />
      </div>
      <a href={link && link} className={!link ? 'link-disabled' : ''}>
        <div className="rect-container">
          <div className={`linkedin-btn ${classes}-bg`}>{text}</div>
        </div>
      </a>
    </div>
  );
};
export default RectangleHeader;
