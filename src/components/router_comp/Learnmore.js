import React from 'react'
import { Carousel } from 'react-bootstrap';
import '../../App.css'

export default function learnmore() {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={require('../images/one.jpg')}
                            alt="Organic Soya"
                        />
                        <Carousel.Caption>
                            <h3>Organic Soya</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={require('../images/two.jpg')}
                            alt="Organic Mustard"
                        />
                        <Carousel.Caption>
                            <h3>Organic Mustard</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={require('../images/three.jpg')}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Organic millet</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div class="container" id="cat-cont">
                <div class="row">
                    <div class="col" id="index">
                        <nav id="navbar1">
                            <header id="navbar1-header">
                                <div>All About Organic Farming</div>
                            </header>

                            <ul>
                                <li><a href="#Introduction" class="nav1-link">Organic Agriculture</a></li>
                                <li><a href="#Scope" class="nav1-link">Scope of Organic Farming in Uttarakhand</a></li>
                                <li><a href="#Produts" class="nav1-link">Organic Product grown in Uttarakhand</a></li>
                                <li><a href="#Profile" class="nav1-link">Profile of Uttrakhand</a></li>
                                <li><a href="#UOCB" class="nav1-link">Uttarakhand Organic Comodity Board(UOCB)</a></li>
                                <li><a href="#Act" class="nav1-link">First Organic Agriculture Act </a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-9">
                        <main id="main-doc">
                            <section id="Introduction" class="main-section">
                                <header class="main-section-header">
                                    Organic farming
                                </header>
                                <div>
                                    <p>
                                        Organic agriculture seeks to produce healthy, good quality food in an ecologically
                                        responsible way. The organic management systems are designed to avoid the need
                                        for agrochemicals and to minimize damage to the environment and wildlife. Organic
                                        growers world over use sustainable management practices to maintain optimum
                                        natural fertility and biological activity in the soil, and to enhance the farm environment
                                        by encouraging farm wildlife. This helps to support plenty of natural predators, thereby
                                        preventing pests and diseases from reaching damaging levels. A healthy organic soil
                                        ensures sustained availability of nutrients through intricate biological processes,
                                        recycling of biomass keeps it rich in organic carbon and precious biological life and
                                        the combination of all such natural processes help produce crops that yield better in
                                        quantity and quality and is able to resist pests and diseases.<br />
                                        Organic agriculture is based on following fundamental rules:
                                        <ul>
                                            <li>
                                                Nature knows best and has provided the model understood over centuries. One
                                                must learn and emulate from it
                                            </li>
                                            <li>
                                                Management and preservation of all life forms in its full diversity is fundamental to
                                                success
                                            </li>
                                            <li>
                                                Organic agriculture regards soil as a living entity
                                            </li>
                                            <li>
                                                All life forms are integral part of the system and are significant contributors to its
                                                fertility.
                                            </li>
                                        </ul>
                                        The principal aim of organic farming is to establish and maintain a harmonious and
                                        interdependent relationship between soil-plant, plant-animal and animal soil systems
                                        to create a sustainable agro- ecological system based on local resources. Organic
                                        farming uses environment friendly methods of crop and livestock production, without
                                        the use of synthetic fertilizers, growth hormones, growth enhancing antibiotics,
                                        synthetic pesticides or gene manipulation.<br /> As per IFOAM (2002) organic agriculture
                                        should be based on following aims:
                                        <ul>
                                            <li>To produce high quality food in sufficient quantity</li>
                                            <li>To interact in a constructive and life-enhancing way with natural systems and
                                                cycles.</li>
                                            <li>To consider the wider social and ecological impact of organic production and
                                                processing systems.</li>
                                            <li>To encourage and enhance biological cycles within the farming system,
                                                involving microorganisms, soil flora and fauna, plants and animals.</li>
                                            <li>To develop a valuable and sustainable aquatic ecosystem.</li>
                                            <li>To maintain and increase long-term fertility of soils.</li>
                                            <li>To maintain the genetic diversity of the production system and its surroundings,
                                                including the protection of plant and wild life habitats.</li>
                                            <li>
                                                To promote the healthy use and proper care of water resources and all life
                                                therein.
                                            </li>
                                            <li>
                                                To use, as far as possible, renewable resources in locally organized production
                                                systems.
                                            </li>
                                            <li>
                                                To create a harmonious balance between crop production and animal
                                                husbandry.
                                            </li>
                                            <li>To give all livestock conditions of life with due consideration for the basic
                                                aspects of their innate behavior.</li>
                                            <li>
                                                To minimize all forms of pollution.</li>
                                            <li>To process organic products using renewable resources.</li>
                                            <li>To produce fully biodegradable organic products.</li>
                                            <li>To produce textiles which are long lasting and of good quality.</li>
                                            <li>To allow everyone involved in organic production and processing a quality of
                                                life, which meets their basic needs and allows an adequate return and
                                                satisfaction from their work, including a safe working environment.</li>
                                            <li>
                                                To progress towards an entire production, processing and distribution chain
                                                which is both socially just and ecologically responsible.
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </section>




                            <section class="main-section" id="Scope">
                                <header class="main-section-header">
                                    Scope of Organic Farming in Uttarakhand
                                </header>

                                <div>
                                    <p>Currently, the scope of Organic Farming in Uttarakhand is at its best since the farmers use the traditional approach to farming, i.e. rain-fed agriculture, without using pesticides or fertilizers. Along with the common farmers, the government is continuously taking active measures to make the state fully organic and enhance the productivity level along with this. The Uttarakhand Organic Commodity Board (UOCB), the state's nodal agency for promoting organic farming, was established to encourage sustainable development through organic farming.
                                        <br />The following pointers make it more evident that the future of organic farming in Uttarakhand is much brighter:
                                        <ul>
                                            <li>
                                                Uttarakhand has officially certified 23% of its total land for organic agriculture but the government is determined to increase the certified percentage of land for organic farming up to 31% in the state by the end of 2021.
                                            </li>
                                            <li>
                                                In 2019, keeping in view the prospects and scope of farming, the Uttarakhand government has approved India’s first organic agriculture act. The act states the penalties applicable if farmers used pesticides or any kind of banned fertilizer for their crops.
                                            </li>
                                            <li>
                                                It is considered admirable that about 40% of the organic farming done in India is done by Uttarakhand and the state sees a future of being the 'Fully Organic state’ in the next 5 years.

                                            </li>
                                            <li>
                                                The Uttarakhand government is all set to give a boost to the organic market with the help of Self-Help Groups(SHGs) that would be under government control to make the farmers aware of the importance of organic farming and help them enhance their production scale.


                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </section>






                            <section class="main-section" id="Products">
                                <header class="main-section-header">
                                    Organic Product grown in Uttarakhand
                                </header>

                                <div>
                                    <p>
                                        The Himalayan state of Uttarakhand produces an array of certified organic products that are exported globally.

                                        There is a list of organic spices, herbs, and pulses grown in Uttarakhand. Some of them are listed below.
                                        <ul>
                                            <li> Glycine soja(Soyabean)</li>
                                            <li>Maize Corn (Mungari)</li>
                                            <li>Mustard (Sarson)</li>
                                            <li>Pigeon Pea (Tor)</li>
                                            <li>Kidney bean (Rajma)</li>
                                            <li>Ginger (Adarak)</li>
                                            <li>Pea (Matar)</li>
                                            <li>Sesame(Til)</li>
                                            <li>Turmeric(Haldi)</li>
                                            <li>Kukam powder</li>
                                            <li>Onion</li>
                                            <li>Pearl millet (Junyali)</li>
                                            <li>Jhangora Rice(barnyard millet)</li>
                                            <li>Mandua Atta</li>
                                            <li>Jakhiya Seeds</li>
                                        </ul>
                                    </p>
                                </div>
                            </section>





                            <section class="main-section" id="Profile">
                                <header class="main-section-header">
                                    Profile of Uttrakhand
                                </header>
                                <div>
                                    <p>The total reporting area of Uttarakhand is 53,483 sq. km. which accounts for 1.63% of total geographical area of India. 65% percent of Uttrakhand is covered with forest and 23.6% percent is under agriculture and allied activities. Agricultural land of Uttarakhand can be broadly divided into plains (43.2%) and hills (56.8). only 9.43 percent land is irrigated and agricul ture is mostly rain-fed. Due to micro climate differences, the agro climatic zones in the region can be divided broadly as follows:
                                        <br />
                                        1. Plains and tarai, bhabhar zon (up to 1000 ft.)
                                        <br />
                                        2. Middle Himalayan zone (1000 to 3000 ft.)
                                        <br />
                                        3. Higher Himalayan zone (above 3000 ft.) </p>
                                </div>
                            </section>



                            <section class="main-section" id="UOCB">
                                <header class="main-section-header">
                                    Uttarakhand Organic Comodity Board(UOCB)
                                </header>
                                <div>
                                    <p>Uttarakhand Organic Commodity Board came in to existence on 19 May 2003 after being registered under the societies registration act, 1860. It acts as the nodal agencies to enhance organic activities in agriculture and allied sectors like Horticulture, Medicinal Aromatic Plants & Herbs, Milk Production and animal husbandry throughout the state. The professional, managerial, technical Support to UOCB for management of farmers' organization and to lead farmers is provided by Centre for Organic Farming (COF) which is a project grant sanctioned by Sir Ratan Tata Trust, Mumbai under Uttarakhand Organic Commodity Board. The main aim of UOCB is to make Uttarakhand ‘The Organic Capital of India’. The main objective of UOCB is to provide training to farmers, extension workers from government line departments, NGO’s in the field of production, certification as well as marketing. UOCB organizes exposure visits for farmers, middle and senior level officers for seminars, exhibitions and other gatherings in Organic sector. UOCB has converted few districts into bio-villages
                                        <br /><b>Functions of UOCB</b>
                                        <br />
                                        1. The 'Fill in the Blank' Service UOCB assists organic farmers to become Organic Producer Groups and links them to market by developing production plans based on market response.
                                        <br />
                                        2. Prime mediator for the Internal Control System UOCB compiles the data generated by the investigators and workers for commodity production projection of the coming season to facilitate forward linkage processes. The availability of updated data at a single window helps the marketing cell to plan for the supply chain.
                                        <br />
                                        3. The resource center UOCB provides updated technical inputs for the organic production which can be used as per standards. The technologies compiled by the board are passed on to the different stake holders in the state.
                                        <br />
                                        4. Resource Generator UOCB generates resources in the form of finances, human resources and building patronage for the Organic development.
                                        <br />
                                        5. UOCB has been playing a key role in spreading awareness among farmers about the prospects and benefits of organic farming in Uttarakhand. Table 3 shows that UOCB enjoyed maximum response (68.47%) from the farmers. </p>
                                </div>
                            </section>



                            <section class="main-section" id="Act">
                                <header class="main-section-header">
                                    Indian State of Uttarakhand Introduces Country's First Organic Agriculture Act
                                </header>
                                <div>
                                    <p>
                                        <b> The Governor of Uttarakhand has approved the Organic Agriculture Act (2019)</b>
                                        With this act, Uttarakhand has now become the first state in India to introduce an organic agriculture act. Although, let it be noted that the state of Sikkim has already achieved the rank of the country's first organic state.

                                        Through the Organic Agriculture Act, the government has taken official steps toward turning the state fully organic. As it stands, 10 of the state's development areas currently operate organically.

                                        Under the new act, NGOs, private entitites, and traders engaged in the export market and processing of organic products will be regulated. The sale of chemical fertilizers will also be regulated and the act allows for penalties for banned substances. Fines for which may reach up to one lakh.

                                        The act will also help simplify the certification process, which will facilitate the organic certification of agricultural products. Moreover, the state 'organic Uttarakhand brand' will receive encouragement.
                                    </p>
                                </div>
                            </section>
                        </main>

                    </div>
                </div>
            </div>
        </>


    )
}
