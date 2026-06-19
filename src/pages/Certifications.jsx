import CertificateCard from '../components/CertificateCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { certifications } from '../data.js';

export default function Certifications() {
  return (
    <section className="section">
      <SectionHeader eyebrow="Certifications" title="Credentials that support applied technical growth" centered>
        Professional learning across Java, web development, and computer fundamentals.
      </SectionHeader>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {certifications.map((certificate, index) => <CertificateCard key={certificate} title={certificate} index={index} />)}
      </div>
    </section>
  );
}
