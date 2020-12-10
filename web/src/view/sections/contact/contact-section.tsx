import { SectionProps } from '../section';

import s from './contact-section.module.css';

import { TeamMember } from '~model/types';
import { Typography } from '~view/components/typography';

interface Props extends SectionProps {
  team: TeamMember[];
}

export function ContactSection({ id, team }: Props) {
  return (
    <section className={s.contactSection} id={id}>
      <Typography.SectionTitle>Contact</Typography.SectionTitle>

      <ul>
        {team.map(({ companyName, companyUrl, email, firstName, lastName, role }) => (
          <li key={`member-${email}`}>
            {companyName && companyUrl && (
              <a href={companyUrl} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                {companyName}
              </a>
            )}
            {companyName && !companyUrl && { companyName }}
            {companyName && ' | '}
            {role}:{' '}
            <a href={`mailto:${email}`}>
              {firstName} {lastName}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
