import { RiPlayCircleLine } from 'react-icons/ri';
import ReactPlayer from 'react-player';
import { defineType } from 'sanity';

const Preview = ({ value }: { value: { url: string } }) => {
  return <ReactPlayer url={value.url} />;
};

export const Video = defineType({
  name: 'video',
  type: 'document',
  title: 'Video',
  icon: RiPlayCircleLine,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Date that the video will be public. Videos will also be ordered by date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description:
        'Vul een link in naar YouTube, Facebook, Twitch, Streamable, Vimeo, Wistia of DailyMotion',
      validation: (Rule) => Rule.required().error('Vul een URL in.'),
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Korte beschrijving',
    },
  ],
  components: {
    preview: Preview,
  },
  preview: {
    select: {
      date: 'date',
      caption: 'caption',
      title: 'name',
    },
    prepare: ({ caption, date, title }: any) => ({
      media: RiPlayCircleLine,
      subtitle: `${date} - ${caption ?? 'no caption'}`,
      title,
    }),
  },
  orderings: [
    {
      title: 'Date',
      name: 'date',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
});
