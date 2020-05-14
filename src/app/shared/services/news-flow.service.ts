import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsFlowService {

   // fake data
   newsFlow = [
    {
      id: 0,
      title: "Une chute terrible",
      date: "14/05/2020",
      content:" Ce jeudi, le jeune Hugo, hospitalisé\n" +
        "      pour une opération de l'appendicite, était transporté dans un couloir du CHU par deux brancardiers expérimentés.\n" +
        "      Cependant, dans un virage décrit par plusieurs membre de l'équipe hospitalière comme \"serré\",\n" +
        "      le personnel a perdu le controle du brancard qui a heurté de plein fouet le mur opposé.\n" +
        "      Le jeune Hugo fut propulsé hors du brancard, et après plusieurs tonneau,\n" +
        "      il fut retrouvé grogui mais conscient au milieu du couloir.\n" +
        "      Heureusement, plus de peur que de mal, il ne souffrait que de quelques contusions\n" +
        "      et d'une colère fort justifiée contre ses brancardiers.\n" +
        "      Une enquête est en cours pour déterminer le degrès d'alcoolisation des brancardiers,\n" +
        "      décrit par l'équipe hospitalière comme \"fétards\" et \"portés sur la boisson\".\n" +
        "      L'équipe du CHU présente une nouvelle fois ses excuses à Hugo, et souhaite préciser que les patients peuvent\n" +
        "      retrouver le CHU en toute confiance. La sécurité est notre priorité.",
      img: "https://picsum.photos/id/1031/500"
    },
    {
      id: 1,
      title: "Une erreur médicale exceptionnelle",
      date: "12/05/2020",
      content:"Simple distraction ou incompétence ? La question était sur toutes les lèvres hier à Bordeaux.\n" +
        "      Pour Fabien, en tout cas, victime de l’erreur du docteur, la réponse ne faisait pas de doute :\n" +
        "      « c’est clairement de l’incompétence, il est allé demander pardon à un homme qui était debout\n" +
        "      sur ses deux jambes ! » s’est-il exclamé avant d’ajouter : « amputer la mauvaise jambe, ça peut arriver\n" +
        "      à tout le monde mais demander pardon à un autre je lui pardonnerai jamais ! »\n" +
        "      Pour la femme du docteur, au contraire, ce dernier est simplement un peu distrait mais son professionnalisme\n" +
        "      n’est pas à remettre en cause : « C’est vrai que ce n’est pas rare de le voir couper la galette des rois\n" +
        "      avec une scie circulaire mais ça ne l’a jamais empêché de faire des parts égales. » confie-t-elle.\n" +
        "      Même son de cloche chez ses collègues qui affirment l’avoir vu faire plusieurs opérations avec une pelle à tarte\n" +
        "      en lieu et place du scalpel mais sans que cela n’influe jamais sur le résultat . « Bien qu’il lui soit arrivé\n" +
        "      une ou deux fois d’enlever la rate en même temps que le foie » concède toutefois l’un d’entre eux.",
        img: "https://picsum.photos/id/1069/500"
    },
    {
      id: 2,
      title: "Le CHU se déconfine",
      date: "11/05/2020",
      content:" L'hopital est prêt à acceuillir de nouveaux patients. Nous avons des places disponibles, venez nombreux!\n" +
        "      Toutes les mesures sont prises pour vous recevoir en toute sécurité et traiter l'ensemble de vos maladies.\n" +
        "      Vous nous avez manqué! A très vite!",
      img: "https://picsum.photos/id/130/500"
    },
    {
      id: 3,
      title: "L'hopital est en vacances",
      date: "07/05/2020",
      content:"Le pont du 08 mai approchant, nos équipes prennent quelques jours de repos. De ce fait, l'hopital ferme ses portes\n" +
        "      pour trois jours.\n" +
        "       Nous remercions donc nos patients d'éviter de tomber malade ces prochains jours. En cas de difficultés, vous pouvez\n" +
        "       appeler le 15, il est possible que quelqu'un vous réponde dans la journée. Ou pas.\n" +
        "       Bonnes vacances à tous!",
      img: "https://picsum.photos/id/156/500"
    }
  ]
  
  constructor() { }
}
