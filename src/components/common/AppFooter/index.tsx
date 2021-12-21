import "./AppFooter.scss";

export default function AppFooter() {
  return (
    <footer className="footer">
      <p className="footer__made">Made with</p>
      <p className="footer__heart">❤️</p>
      <p className="footer__by">by</p>
      <p className="footer__name">
        <a href="http://github.com/alxmcr" className="footer__link">
          Alejandro
        </a>
      </p>
    </footer>
  );
}
