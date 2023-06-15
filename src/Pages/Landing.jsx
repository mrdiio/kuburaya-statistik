import Heroes from '../Components/Landing/Heroes';
import Statistik from '../Components/Landing/Statistik';
import Group from '../Components/Landing/Group';

export default function Landing() {
  const organizations = [];

  for (let i = 0; i < 12; i++) {
    const obj = {
      name: 'Organization Kubu Raya ' + i,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, aliqu' +
        i,
      image:
        'https://satudata.kuburayakab.go.id/uploads/group/2021-11-23-195547.630282logokkr-512.png',
    };

    organizations.push(obj);
  }

  return (
    <>
      <Heroes />

      <Statistik />

      <Group />
    </>
  );
}
