import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFoundScreen (): JSX.Element {
  return (
    <main className="decorated-page login">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
        </picture>
      </div>
      <div className="container container--size-l">
        <h1>404. Page not found</h1>
        <span style={{textDecoration: 'underline'}}>
          <Link to={AppRoute.Main}>Back to main page</Link>
        </span>
      </div>
    </main>
  );
}

export default NotFoundScreen;
