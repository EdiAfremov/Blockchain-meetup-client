const LinkedinBtn = ({ image, link }) => {
  return (
    <div className="linkedin-btn-container linkedin-bg-btn">
      <a
        href={link && link}
        target="_blank"
        className={
          !link
            ? 'linkedin-register-btn link-disabled'
            : 'linkedin-register-btn'
        }
      >
        <img src={image} height={50} />
      </a>
    </div>
  );
};
export default LinkedinBtn;
