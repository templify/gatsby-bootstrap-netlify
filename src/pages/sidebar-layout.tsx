import React from "react"
import SidebarLayout from "../layouts/SidebarLayout"
import { Container } from "react-bootstrap"

function Footer() {
  return (
    <div>
      © {new Date().getFullYear()} Brian Morrison II
    </div>
  )
}

export default function SidebarLayoutExample() {
  const ni = [
    {
      name: "Section 1",
      items: [
        {
          display: "Item 1",
          to: "#"
        },
        {
          display: "Item 2",
          to: "#"
        },
        {
          display: "Item 3",
          to: "#"
        }
      ]
    },
    {
      name: "Section 2",
      items: [
        {
          display: "Item 4",
          to: "#"
        },
        {
          display: "Item 5",
          to: "#"
        },
        {
          display: "Item 6",
          to: "#"
        }
      ]
    }
  ]

  return (
    <SidebarLayout navItems={ni} footer={Footer()} pageTitle="Sidebar Layout">
      <Container className="px-4 mt-2" fluid>
        <p>
        Sem euismod nullam nascetur mi nunc habitant! Habitasse scelerisque ut proin! Nisl sem tristique nisl aptent, interdum non. Nibh curae; quam fermentum hac ac pharetra quam. Viverra nostra faucibus metus primis duis nec natoque id ornare fames eget. Inceptos bibendum dis odio malesuada ullamcorper euismod. Cubilia scelerisque eleifend nostra? Penatibus sit per at nisl varius arcu phasellus ultricies! Aliquam faucibus nunc platea praesent himenaeos lectus tempus semper fusce. Ut inceptos in hac posuere metus mi gravida natoque eros euismod ultricies. Feugiat dapibus felis.
        </p>
        <p>
        Velit at bibendum dictum tincidunt facilisi interdum. Tincidunt quisque est auctor quisque erat mi ornare. Orci potenti gravida potenti malesuada turpis ultrices integer lobortis, facilisi varius habitasse integer. Sagittis tortor tempus sociosqu tristique fusce vehicula erat elementum class. Curae; maecenas viverra ut. Netus nisl scelerisque amet tincidunt magnis orci scelerisque curae; cubilia rhoncus nam. Sapien hac duis nisl sollicitudin tincidunt imperdiet a pharetra hac tristique.
        </p>
        <p>
        Per enim, nam curabitur rutrum! Id magna ultrices id duis ullamcorper etiam sodales fermentum diam dignissim fringilla. Interdum nostra dictum nulla a erat hac eleifend ornare lorem interdum maecenas. Nibh nisl tellus dapibus urna gravida gravida pulvinar aptent dictumst est curae;. Montes, dictumst sed at ad aptent sit lacus fringilla ante aenean netus est. At aenean ultrices tempor dui vitae, congue penatibus bibendum sapien. Ut fusce himenaeos!
        </p>
        <p>
        Nullam tincidunt dui est cum nibh at suscipit pellentesque suscipit cum litora. Justo habitasse velit sodales facilisis habitant phasellus pharetra! Elit velit quam potenti lacinia metus faucibus, maecenas primis. Pretium suscipit neque sagittis faucibus. Dictumst ullamcorper class sagittis eros. Ipsum convallis posuere bibendum fringilla vitae netus aenean laoreet conubia orci ornare. Fames volutpat velit, maecenas at velit quis habitasse mus. Justo platea primis semper nulla at primis amet! Venenatis natoque leo in pharetra nascetur varius conubia phasellus! Congue, cras donec a cum amet. Vel non purus mollis.
        </p>
        <p>
        Facilisi feugiat conubia tincidunt pulvinar purus senectus dis montes. Bibendum interdum sapien, rhoncus augue risus orci eget lectus semper. Condimentum aliquet, velit phasellus. Libero dictum scelerisque tincidunt malesuada praesent nisi. Vulputate ipsum volutpat sagittis maecenas taciti nisl. Cubilia morbi ad metus magnis cubilia penatibus sollicitudin lacus libero sit! Viverra molestie lobortis praesent sociis felis nullam.
        </p>
        <p>
        Imperdiet pulvinar ut, porta nisi molestie ad taciti feugiat. Sed lectus interdum porta. Habitasse nullam fames condimentum commodo eget mi. Adipiscing aliquam vulputate at arcu fermentum odio nulla enim id eros condimentum. Lectus nostra ipsum maecenas id faucibus aliquam magna pharetra phasellus condimentum tellus. Consequat duis inceptos fringilla cursus nisi faucibus donec maecenas. Himenaeos senectus aliquam eros placerat. Vehicula ultrices ante lobortis sem rutrum erat convallis urna. Elementum sed quam tempus quis a sem. Auctor feugiat duis congue fames quisque vulputate nullam potenti non, orci scelerisque. Nostra posuere hendrerit cras mollis tristique quam.
        </p>
        <p>
        Sollicitudin curabitur diam, facilisis vehicula dui dolor. Ultrices et nibh nascetur suscipit turpis lacinia nulla suspendisse, iaculis erat semper. Nisl ornare aenean, curae; elementum nibh. Phasellus bibendum mus lacinia est ullamcorper tristique elit urna. Porta sociosqu elit porta eget. Ante class, mattis malesuada hendrerit porttitor pulvinar ullamcorper sociis mi. Pellentesque vulputate, pretium sociosqu! Inceptos facilisi bibendum senectus lacus velit lobortis nulla. Porta phasellus diam aenean convallis a eros pellentesque malesuada mauris porttitor. Platea ut placerat ornare. Tincidunt diam nibh vulputate ullamcorper magna egestas viverra mi quam platea. Nam lectus habitant dis. Justo torquent neque sagittis ornare.
        </p>
        <p>
        Venenatis nam aenean nisi aenean tincidunt sagittis? Ultricies consectetur phasellus cras egestas consectetur donec nunc nam tortor odio ad semper. Diam litora nam sagittis porta euismod. Faucibus quisque bibendum cum. Netus consequat iaculis dictumst dis? Dignissim sollicitudin condimentum integer curae; sollicitudin habitant id ipsum. Tellus risus, platea maecenas himenaeos amet. Eros.
        </p>
        <p>
        Integer egestas felis torquent pellentesque sodales natoque volutpat justo vel sollicitudin. Tempor amet enim eleifend turpis tincidunt phasellus etiam. Duis nascetur arcu sagittis ullamcorper, sociis nisi. Feugiat integer euismod accumsan! Ad, pellentesque commodo aptent. Gravida posuere aliquam sapien primis suscipit morbi. Interdum rutrum dis adipiscing. Cras conubia elit ut torquent facilisis amet eleifend fermentum facilisis interdum mauris. At enim est nulla aptent quis mauris nulla magna erat est. Nisi duis dictumst.
        </p>
        <p>
        Nascetur tortor fames sapien varius faucibus integer? Curae; quam felis netus taciti. Dis tristique et aenean eu odio quisque mus arcu dapibus. Faucibus vitae convallis nec aliquam arcu scelerisque posuere senectus tincidunt himenaeos. Felis interdum maecenas massa mollis! Fusce dictumst erat risus eleifend auctor vestibulum habitasse nunc dis ipsum ante tellus. Parturient inceptos phasellus elit sit a netus facilisi. Porttitor commodo conubia hac malesuada interdum blandit! Duis enim eget commodo faucibus sagittis! Augue class sodales mi enim, nec nisi id. Tortor, sapien felis nec nulla imperdiet sodales nisi torquent. Tortor.
        </p>
        <p>
        Penatibus accumsan penatibus quam lobortis. Nullam dapibus himenaeos imperdiet faucibus suscipit nisi parturient nostra egestas nec torquent non. Metus taciti, pulvinar blandit curae; dis habitant nibh velit massa pharetra primis. Praesent purus elit sapien. Cursus neque faucibus faucibus sociosqu egestas ante iaculis! Conubia mi orci nisi senectus, praesent risus mi leo montes vivamus taciti? Venenatis donec a porttitor gravida hac! Eget nisi facilisis ipsum nunc praesent dolor. Nullam a mollis taciti eleifend montes suscipit posuere consequat ipsum. Facilisi himenaeos pulvinar adipiscing. Eros aenean consequat condimentum. Tellus iaculis curabitur diam hac penatibus tristique proin? Bibendum id vulputate nibh.
        </p>
        <p>
        Erat porttitor donec enim proin mi. Per felis lobortis molestie facilisi. Magna eleifend lacus amet ut sagittis dignissim ullamcorper ac. Tincidunt enim dis sed sociosqu gravida per adipiscing nisl. Cubilia facilisis duis class hendrerit vulputate euismod. Nisl in nibh dapibus rutrum, luctus neque sagittis. Eros consectetur montes lacus sem dictumst inceptos nisl. Quisque litora lobortis dignissim praesent mauris orci gravida magna. Penatibus rutrum iaculis scelerisque urna laoreet pellentesque fermentum nibh parturient vehicula.
        </p>
        <p>
        Dictumst rutrum ullamcorper non ultrices, fermentum consectetur! Arcu magnis faucibus himenaeos risus vivamus sit pulvinar. Augue tellus taciti suspendisse ipsum lacus maecenas ante fusce cras tortor. Parturient adipiscing dis tristique integer aliquam fermentum nisi dolor cursus est mi nec. Molestie ad eleifend nec; volutpat amet parturient ipsum. Senectus porta ultricies penatibus lorem iaculis conubia.
        </p>
        <p>
        Mauris odio egestas ante urna eu ante lectus non et litora ut feugiat. Odio odio mus, enim vulputate quis cubilia aliquet diam. Dictum, risus primis per ullamcorper justo metus quis duis hendrerit netus pellentesque tortor. Taciti justo gravida curae; lacinia montes penatibus scelerisque vehicula penatibus justo bibendum. Habitasse venenatis ad at consequat senectus integer aliquam dignissim risus ultricies torquent id. Vivamus nullam laoreet praesent. Tortor hendrerit vulputate!
        </p>
        <p>
        Fringilla rutrum libero, vel cursus nam consectetur elementum maecenas rutrum. Per dignissim tempus litora? Sociis et velit sagittis ultrices sit risus sit. Conubia primis consectetur congue adipiscing pellentesque mollis lacus. Quis, himenaeos eu venenatis habitasse feugiat eleifend neque sed donec ad curae; suscipit? Nibh rhoncus nulla fermentum morbi lorem mollis curae; suspendisse nisi, inceptos hac et. Lacinia ut nunc id ipsum faucibus parturient nam. Tempus, accumsan eleifend magnis integer porta tristique condimentum enim ultricies nibh. Eu ridiculus quisque ipsum. Varius parturient sodales litora integer nascetur elementum.
        </p>
        <p>
        Aenean tristique, fermentum pellentesque! Nunc interdum suspendisse justo primis fermentum praesent lectus! Aliquet quis tempus inceptos. Nascetur a vulputate fames rhoncus id lacinia fermentum sagittis interdum pulvinar nisl quisque. Pulvinar sem bibendum eu curae;. Sem proin ligula tempus mattis nec potenti class interdum non pretium. Suscipit, proin facilisi porta sociosqu posuere cum vulputate scelerisque suspendisse praesent ullamcorper malesuada. Phasellus taciti cursus mauris morbi commodo gravida taciti. Fusce aenean enim sollicitudin sociis interdum. Etiam nascetur tortor nec aliquet nunc id nullam, venenatis vestibulum posuere viverra sociosqu. Pulvinar urna condimentum cras, in odio ridiculus leo. Vel.
        </p>
        <p>
        Montes ut nulla nisi. Pellentesque donec accumsan senectus vel euismod ante cubilia. Vehicula dictumst gravida placerat placerat sit sollicitudin vulputate morbi sociis hac. Ad sollicitudin pretium himenaeos hac, suspendisse sed bibendum ut ac consequat. Accumsan praesent potenti egestas ultrices natoque faucibus enim semper auctor rhoncus potenti? Feugiat metus quisque, fringilla nostra quisque ante sagittis platea. Odio velit risus volutpat adipiscing ut tempus dignissim lorem porttitor porttitor. Fusce nam habitant viverra nam urna aliquam pellentesque.
        </p>
        <p>
        Nascetur in pretium porttitor ultrices nibh quis viverra ornare suspendisse proin. Vivamus justo nisi curabitur nibh rutrum bibendum laoreet sociis nostra? Ultrices hac ac commodo vivamus rhoncus feugiat magna erat varius euismod. Maecenas interdum elit odio feugiat massa praesent; leo tellus. Fermentum tincidunt platea per molestie pulvinar. Conubia feugiat nulla hendrerit auctor magna senectus hac. Mus eleifend suspendisse eget? Ligula fusce laoreet lobortis. Volutpat dictumst nam lobortis torquent adipiscing cras inceptos. Sociis magna ornare velit, habitasse ornare elit ad. Mi penatibus nisi curabitur eros dictum.
        </p>
        <p>
        Aenean scelerisque luctus egestas mus sociis mollis justo adipiscing nascetur est. Ultricies lacus dictumst magnis senectus. Natoque a, sociosqu orci sodales platea. Dapibus enim aenean erat sodales. Nisl feugiat ultrices maecenas sapien tortor magnis. Montes posuere et lectus libero vitae nibh ridiculus elementum. Odio velit, magna tempus. Gravida pharetra consequat facilisi sollicitudin urna habitasse felis eros inceptos imperdiet. Quam, erat lorem posuere nulla pulvinar dignissim class primis tempus quam consequat! Augue, aliquam neque sapien feugiat platea nec lectus tempor. Nullam torquent quisque eu risus eleifend libero ligula libero vivamus faucibus vivamus vestibulum. Magnis!
        </p>
        <p>
        Magnis nec sollicitudin consectetur neque non torquent habitant rutrum. Dui lorem congue ante at etiam cras parturient. Purus quisque pulvinar tortor lorem ultricies rutrum dolor arcu nam dapibus velit. Integer nulla nisl faucibus hendrerit. Facilisi scelerisque porttitor ullamcorper leo commodo erat dignissim varius ut nec? Auctor rutrum ridiculus dignissim, malesuada neque rutrum elit. Nec consectetur posuere vehicula dis montes lacus? Elit, aliquet blandit dictum malesuada lorem risus. Dui sollicitudin faucibus natoque rutrum suspendisse hac pharetra tempor. Aptent.
        </p>
      </Container>
    </SidebarLayout>
  )
}
