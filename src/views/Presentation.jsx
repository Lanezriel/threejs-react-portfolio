import { useEffect } from "react";
import PresentationExperience from "../experiences/PresentationExperience/PresentationExperience";
import { Section, Title, Wrapper } from "./Presentation.styled";

const Presentation = () => {
  useEffect(() => {
    document.body.style.setProperty('overflow-y', 'auto');
    document.documentElement.classList.add('hidden-scrollbar');

    return () => {
      document.body.style.setProperty('overflow-y', 'hidden');
      document.documentElement.classList.remove('hidden-scrollbar');
    };
  }, []);

  return (
    <Wrapper>
      <PresentationExperience />
      <Section>
        <Title>Presentation (in creation process)</Title>
      </Section>
      <Section>1</Section>
      <Section>2</Section>
      <Section>3</Section>
      <Section>4</Section>
      <Section>5</Section>
      <Section>6</Section>
      <Section>7</Section>
      <Section>8</Section>
      <Section>9</Section>
      <Section>10</Section>
      <Section>11</Section>
      <Section>12</Section>
      <Section>13</Section>
      <Section>14</Section>
      <Section>15</Section>
      <Section>16</Section>
      <Section>17</Section>
      <Section>18</Section>
      <Section>19</Section>
      <Section>20</Section>
      <Section>21</Section>
      <Section>22</Section>
      <Section>23</Section>
      <Section>24</Section>
      <Section>25</Section>
      <Section>26</Section>
      <Section>27</Section>
      <Section>28</Section>
      <Section>29</Section>
      <Section>30</Section>
    </Wrapper>
  );
};

export default Presentation;
