type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { movieId } = await params;
  return <div>{movieId}</div>;
};

export default DetailsPage;
