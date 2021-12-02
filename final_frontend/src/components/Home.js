
import React from "react";

function Home() {

    return (
        <div>
            <h1>Home</h1>
            <div className="homeBack">
                <div className="home">
                        
                    <p>The thought of a family member or a friend or even yourself going missing is terrifying,
                        and it is something that nobody ever has to go through but unnafortunately it happens.
                        So far in 2021 1,787 persons have gone missing,836 of them being adults and the other 951 are juveniles.
                        In 2014 the amount of missing persons was actually 3,726 thankfully numbers have gone down quite a bit,
                        but what actually happens when a loved one goes missing, you call the police of course,
                        the police will ask you for physical appearance and if you're someone like me you might not have
                        pictures of how you look recently.
                    </p>
                    <img className="missingImage" src={"https://i.redd.it/y7egl6g4b9z31.jpg"}/>
                    <p>I have started this app because I wanted somewhere to store information like that,
                        there are a lot of us that dont actually update their social media or even take pictures,
                        this is a app where you can store information about physical appearace,
                        and make updates when you go out anywhere, to a party or even the grocery store,
                        after you build your profile it is adviced that you assign a trustee,
                        someone that you trust with this information in case you ever go missing,
                        and if you ever do, this person will be able to help a little more with extra details
                        about where you last were and and your appearance.</p>
                    <img className="missingImage" src={"https://www.vanguardngr.com/wp-content/uploads/2019/10/Kidnapped.jpg"} />
                    <p>Kidnapping is a very real threat, wherever you may be in the world or whatever city you may live in.
                        It's not just a problem in third world or politically unstable countries.
                        Each year, tens of thousands of adults and children go missing due to kidnapping,
                        the reason for which may not always be related to money. To protect yourself and your family,
                        here are tips on how to prevent kidnapping:</p>
                    <h3>Find Alternative Routes</h3>
                    <p>If you think there is a threat, find other streets or highways you can use when driving from home to work and back.
                        Kidnappers rely on your routine to track you down and then look for a time when you're most vulnerable to an attack.</p>
                    <h3>Do Not Accept Rides Offered By Strangers</h3>
                    <p>Once you get into a stranger's car, you are at their mercy.
                        They could either incapacitate you or hold you hostage and you might not have an opportunity to defend yourself.</p>
                    <h3>Secure Your Home</h3>
                    <p>Kidnappers don't always snatch their victims off the streets. They can sometimes begin the attack right in
                        your own home. To prevent kidnapping in your own property, close your doors and gates, and install locks or alarms.
                        The more secure you are inside, the more difficult you will be to abduct.</p>
                    <h3>Let Someone Know Where You're Going</h3>
                    <p>If you must meet a new acquaintance, make sure someone knows where you're going and who you're meeting.
                        Leave word with a family member or friend where you're headed and if possible,
                        give the name of the person you're about to meet and other details you might know.
                        Meet them in a crowded place or somewhere other people can see you. Heavy human traffic is a major deterrent for
                        kidnappers and may just save your life.</p>
                    <h3>Tell Your Child to Never Talk to Strangers</h3>
                    <p>Train your children to avoid strangers, even if they seem friendly and offer gifts.
                        If a stranger asks for help, tell your child to refuse and to call the attention of an adult immediately.
                        If a gift is being offered, tell them not to accept anything.</p>
                    <h3>Arm Yourself with Self Defense Weapons</h3>
                    <p>Other than a gun, there are weapons and gadgets you can carry with you that are very effective for preventing kidnapping.
                        Pepper sprays, for example, are very effective for stopping an attacker and giving you sufficient time to incapacitate
                        him/her and escape. A stun gun is also a very important self defense weapon to bring to help prevent a kidnapping.
                        A stun gun is capable of bringing a sufficient jolt of electricity to shock an attacker,
                        rendering him/her helpless for a few precious minutes so you have time to run away.</p>

                    

                    <h2>How to Report a Kidnap and Where to Go For Help</h2>
                    <img className="missingImage" src={"https://blog.malwarebytes.com/wp-content/uploads/2020/08/shutterstock_640142056-604x270.jpg"} />
                    <h3>Contact local law enforcement</h3>
                    <p>If you know or suspect that someone has been kidnapped, contact your local law enforcement agency immediately.
                        The police or sheriff’s department will take the information you provide and investigate the situation.
                        They can also contact the FBI or other agencies if necessary. To make a report,
                        call 911 or contact the agency directly. Ask to file a missing person’s report and to have the victim’s
                        name entered into the National Crime Information Center database.</p>
                    <h3>Note as many details as you can</h3>
                    <p>Law enforcement will wan to know as much information as you can provide about the kidnapper and victim. Be prepared to provide:
                        {/* <p></p> */}
                        <li>The name of the victim</li>
                        <li>The name and description of anyone you might suspect as the kidnapper</li>
                        <li>Details about the suspect’s vehicle</li>
                        <li>What the victim was last seen wearing</li>
                        <li>Recent photographs of the victim</li>
                        <li>Notes about the victim’s appearance, such as height, weight, hairstyle, eye color, glasses, birthmarks, scars, tattoos,
                            braces, and piercings.</li>
                    </p>
                    <h3>Request an AMBER Alert</h3>
                    <p>Law enforcement has discretion to issue an AMBER Alert, which uses a cross-country network of media outlets to alert the
                        public to the kidnapping of a child. Because law enforcement has discretion to issue or not issue an alert, you will have to
                        rely upon their judgment. Officials use the following criteria when deciding to issue an alert:
                        <li>Confirmation that an abduction has occurred. Officials may hesitate to issue an alert when the reason for the
                            child’s absence might be innocent.</li>
                        <li>Risk of serious bodily injury or death.</li>
                        <li>The availability of sufficient descriptive information about the victim and suspect.</li>
                        <li>The child’s age.</li>
                        <li>Whether or not the child’s information has been entered into the National Crime Information Center system.</li>
                    </p>



                </div>
            </div>
        </div>
)}

export default Home;