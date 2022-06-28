import { useState } from "react";
import MyModal from "./Modals/Modal";

export function Modal() {
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  return (
    <div className="bg-blue-400 bg-opacity-30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-3">
          <button
            className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
            onClick={() => setShowMyModal(true)}
          >
            Open Modal
          </button>
        </div>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          expedita fugiat autem voluptas. Consequuntur, commodi? Temporibus
          placeat eaque veniam iure, repellendus illum deleniti atque nobis
          possimus enim quam deserunt asperiores distinctio labore voluptas
          soluta laboriosam suscipit sapiente porro. Vitae obcaecati, culpa
          consequatur tempora eaque rem porro vel deleniti libero fuga quas
          pariatur laboriosam soluta asperiores illum ex numquam voluptates
          sequi? Nesciunt aliquid cum obcaecati? Quasi dolor unde vel fugiat
          esse tenetur quisquam saepe est doloribus ipsam voluptatum dolorem
          odit eveniet, quae, laborum dicta deserunt illo libero quas excepturi
          reiciendis, exercitationem odio ipsum. Eligendi accusantium explicabo
          itaque at culpa qui quaerat quibusdam, mollitia libero voluptate natus
          veritatis nemo eveniet recusandae tempora sed? Eveniet earum, illo
          unde hic aspernatur repudiandae repellat molestias officiis odio
          consequatur explicabo dolorum debitis at, maiores nulla repellendus
          nostrum alias quidem neque saepe! Ipsum architecto sequi fugit quos
          quia ipsa nesciunt placeat sit animi, pariatur possimus nisi eligendi
          deserunt qui voluptate fuga repudiandae. Et exercitationem fugiat vero
          quisquam facere dolor est commodi provident, neque error, ab vitae in
          sapiente rerum dolorem molestiae! Consequuntur omnis vero labore ut
          libero rerum quos officiis. Itaque fugiat minima quos voluptates vel
          alias repellendus temporibus voluptatum voluptatibus assumenda
          voluptas expedita cumque error obcaecati quam, unde possimus
          accusantium consectetur delectus iusto sunt eligendi. Inventore atque
          harum ipsa magnam voluptatem provident! Quas mollitia, itaque quae
          necessitatibus officiis dolor at, nostrum aliquam quis, cupiditate
          fugit quos? Aspernatur dolorum nesciunt voluptatem mollitia,
          consectetur iste, consequatur dicta doloremque ab quibusdam eum
          excepturi perferendis. Maiores error recusandae blanditiis est
          numquam, quo delectus facilis velit optio dolores tempore modi rem
          mollitia ullam odio eos itaque expedita obcaecati. Nulla quod
          doloribus obcaecati consequatur non dicta minus porro quidem, quo
          quibusdam itaque optio praesentium eveniet voluptas debitis et nobis
          voluptate culpa vero animi alias sequi aliquid? Tempora, voluptas!
          Voluptas, dolores repudiandae nulla maxime at modi provident
          architecto laudantium ullam, harum in cupiditate delectus! Quia dolor
          consequatur quam ipsa neque culpa dolorum, sequi, iste quibusdam non
          vero est saepe, harum eaque autem! Rem quas, dignissimos quaerat odio
          ipsum libero, amet impedit vel, perferendis recusandae earum.
          Exercitationem tenetur velit, odio aliquid esse mollitia, tempora enim
          delectus itaque necessitatibus in quo. Accusantium vel cum impedit
          optio architecto, animi veritatis quaerat eos magni quos assumenda
          atque. Exercitationem in enim perferendis quo, earum natus tempora
          deserunt suscipit, dignissimos error consequuntur aut blanditiis?
          Facilis reprehenderit quo voluptatum totam quas qui beatae commodi
          minus laborum! Voluptates odio aliquid vitae culpa nobis corporis eius
          est pariatur eveniet ratione aperiam dolorum eos rerum a veniam
          laudantium, voluptatibus cumque et, libero quae consectetur minima
          maiores dignissimos. Amet quae deserunt rem unde fuga atque
          consectetur, obcaecati sunt ut voluptates. Nulla illum magni mollitia
          quo consequuntur, praesentium explicabo repellendus doloremque ipsum
          libero, iusto repudiandae vero temporibus? Eius, animi harum iste
          minus, doloremque qui recusandae adipisci vel fuga quibusdam natus,
          perferendis amet deleniti vitae officia assumenda. Commodi voluptatum
          nihil earum ab doloremque non laboriosam dolore, esse et, eius fuga
          optio rem quae nisi explicabo aliquam quo dignissimos. Quidem aperiam
          sunt asperiores, debitis maiores, voluptate iusto, quas repudiandae
          dolor unde repellat? Harum aspernatur animi sapiente voluptas, totam
          saepe reprehenderit, assumenda iste quisquam repellendus cum! Aperiam
          nulla optio cumque dicta dignissimos magnam provident quia. Alias
          adipisci ex neque assumenda nihil necessitatibus deserunt praesentium
          dignissimos dolore excepturi similique aliquid, in, ea doloremque,
          distinctio libero repellat explicabo natus animi veritatis ab!
          Voluptatibus, alias, aut officiis laboriosam magnam similique dolore
          placeat quidem perspiciatis, non voluptas ad dignissimos itaque? Eum
          quia dignissimos aut. Facilis laborum minima deserunt repudiandae
          debitis. Error, perferendis repellat? Facilis maxime et sunt, adipisci
          magnam in libero assumenda officiis esse asperiores aperiam id
          sapiente voluptatem nobis perferendis aliquam nemo minus tempore
          excepturi. Molestias expedita atque architecto corrupti autem, natus
          modi eos vel odit, repellendus minima placeat sunt velit quos commodi
          deleniti hic deserunt voluptatum ipsa corporis unde! Voluptas numquam
          odit officia at quae est magnam impedit atque. Debitis animi dolor
          ducimus? Quod beatae veritatis mollitia placeat ipsa hic possimus
          repellat cumque dignissimos voluptas culpa facere nisi assumenda
          soluta iste perspiciatis, tenetur fugiat. Ipsum deserunt eum ea minus
          atque, quisquam, totam molestias aspernatur blanditiis dignissimos
          vero? Quod repellat voluptate odio deserunt! Officiis quia ratione a
          eum nesciunt illum dolorum adipisci necessitatibus assumenda
          perspiciatis odio suscipit error consequatur odit, dolorem quo
          voluptatibus, aut dolor sequi rerum fugit quasi eveniet. Rem
          repudiandae amet obcaecati atque saepe aut asperiores, incidunt
          exercitationem corporis placeat dolore fuga totam praesentium quam
          iure magni accusamus. Voluptate, eaque nobis quos dolorum quod aperiam
          commodi est praesentium nam expedita cumque impedit magnam saepe,
          itaque ipsam aut quam dolorem molestiae quaerat assumenda pariatur
          sint! Voluptatum vero incidunt nesciunt, numquam nam maiores obcaecati
          repudiandae quos! Voluptates, molestiae necessitatibus. Repudiandae
          nesciunt at commodi. In maxime, distinctio debitis at dolorem ipsam
          atque nihil fugiat suscipit illo. Illum distinctio, dolorum tenetur
          eligendi ratione dolore, ipsa laborum consequuntur dolores possimus
          odio cumque et saepe architecto voluptatum reiciendis. Perferendis in,
          aliquid ipsa laudantium corporis facere optio expedita esse. Corporis,
          saepe quidem vero maxime doloribus repudiandae pariatur quod sit
          molestiae! Eveniet aspernatur earum voluptates consectetur eius rerum
          debitis voluptatibus nemo. Repellat at temporibus veniam distinctio
          ipsam ullam ad culpa harum non et totam, error sint iste placeat nisi
          consectetur vitae sit blanditiis incidunt quidem veritatis eum?
          Suscipit quibusdam vitae voluptatum numquam veniam in sequi natus
          laboriosam deserunt id temporibus reiciendis, voluptate officia
          pariatur excepturi neque cupiditate cumque! Possimus error assumenda
          amet quas! Laudantium saepe aliquid fugiat, nobis reiciendis,
          necessitatibus debitis vel quasi illo tenetur nihil quas ea, dolorum
          labore provident placeat! Facilis id enim nostrum aut animi illum
          nulla atque, minus quis repellendus. Veritatis, repudiandae?
          Repudiandae, aperiam aut architecto tenetur vero accusantium ducimus
          eius porro nam sed cupiditate omnis repellendus sint ut illo amet
          ipsam a aliquam. Odio, aut quibusdam. Assumenda dolorum, id et
          delectus pariatur nulla est recusandae asperiores! Molestias quibusdam
          veritatis reprehenderit iste eveniet a animi, explicabo similique
          nostrum nisi aspernatur omnis sit, natus inventore placeat reiciendis
          voluptatibus laborum! Rerum eveniet laboriosam nihil similique fugit,
          iste itaque deserunt, atque fugiat incidunt facere, iusto nesciunt
          suscipit veniam id. Quas reiciendis, saepe modi ipsam sint facere.
        </p>
      </div>
      <MyModal onClose={handleOnClose} visible={showMyModal} />
    </div>
  );
}
