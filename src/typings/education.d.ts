interface Translation {
  language: string;
  name: string;
  institution: string;
  description: string;
}

interface Education {
  id: string;
  startDate: string;
  endDate: string | null;
  type: string;
  durationHours: number | null;
  imageUrl: string;
  certificateUrl: string;
  status: string;
  translations: Translation[];
}
