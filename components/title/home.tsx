interface Props {
  section: string;
  title: string;
}

function HomeTitle({ section, title }: Props) {
  return (
    <div className="home_title">
      <p>{section}</p>
      <img
        className="logo"
        src="https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg"
        alt=""
      />
      <h2>{title}</h2>
    </div>
  );
}

export default HomeTitle;
