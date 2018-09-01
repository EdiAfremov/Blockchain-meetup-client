const LinkedinBtn = ({ image, link }) => {
  return (
    <div className="linkedin-btn-container linkedin-bg">
      <a
        href={link && link}
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
