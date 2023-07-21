import {
  Button,
  FlexBox,
  RatingIndicator,
  Text,
  Title,
} from "@ui5/webcomponents-react";
import { IMovie } from "../../store/movies-store";
import "@ui5/webcomponents-icons/dist/heart.js";
import "@ui5/webcomponents-icons/dist/heart-2.js";

type Props = {
  movie: IMovie;
  onFavorite: (movieId: string) => Promise<void>;
  isFavorite: boolean;
};

export const Movie = ({ movie, onFavorite, isFavorite }: Props) => {
  return (
    <FlexBox
      alignItems="Start"
      direction="Row"
      justifyContent="Center"
      wrap="Wrap"
      fitContainer
      style={{ gap: "1rem" }}
    >
      <FlexBox
        alignItems="Start"
        direction="Column"
        style={{ gap: "1rem", padding: "1rem" }}
      >
        <Title level="H2">{movie.title}</Title>
        <Text style={{ maxWidth: "500px" }} wrapping renderWhitespace>
          {movie.description}
        </Text>
        <FlexBox
          alignItems="Center"
          direction="Row"
          justifyContent="Start"
          wrap="Wrap"
          style={{ gap: "1rem" }}
        >
          <Title level="H4">Actor</Title> <Text>{movie.actor}</Text>
        </FlexBox>
        <FlexBox
          alignItems="Center"
          direction="Row"
          justifyContent="Start"
          wrap="Wrap"
          style={{ gap: "1rem" }}
        >
          <Title level="H4">Review</Title>
          <RatingIndicator max={5} value={movie.rating} readonly />
        </FlexBox>
        <Button
          icon={isFavorite ? "heart" : "heart-2"}
          design="Emphasized"
          accessibleName="Favorite"
          onClick={() => onFavorite(movie.id)}
        >
          Favorite
        </Button>
      </FlexBox>
      <img src={movie.poster} alt={movie.title} id="poster" />
    </FlexBox>
  );
};
