import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const footer = (
    <footer id="footer">
        <section>
            <h2>The Team</h2>
            <p>
            A dynamic and diverse team comprised of over 90 people, with varied skill sets
            and expertise, who are constantly ideating, questioning and putting their most creative foot forward to give
            you the best possible experience and have this fest etched in your memories.
            <br/>PS: You can see us running around, talking or managing the audio and visuals during the fest.
            </p>
        </section>
        <section>
            <h2>Reach Us</h2>
            <ul class="icons">
            <li>
                <a href="https://www.instagram.com/aaveg.nitt/" class="icon fa-instagram alt"><span class="label">Instagram</span></a>
            </li>
            <li>
                <a href="https://www.facebook.com/aaveg.nitt" class="icon fa-facebook alt"><span class="label">Facebook</span></a>
            </li>
            <li>
                <a href="https://aaveg.net/youtube" class="icon fa-youtube alt"><span class="label">Youtube</span></a>
            </li>
            <li>
                <a href="https://medium.com/aaveg-blog" class="icon fa-medium alt"><span class="label">Medium</span></a>
            </li>
            <li>
                <a href="https://be.net/aavegdesign" class="icon fa-behance alt"><span class="label">Behance</span></a>
            </li>
            <li>
                <a href="https://linktr.ee/aaveg.nitt" class="icon fa-external-link alt"><span class="label">Links</span></a>
            </li>
            </ul>
            <ul class="actions">
            <li><a href="contact" class="button JPO_open">Contact Us</a></li>
            </ul>
        </section>
        <p class="copyright">
            &copy; Aaveg 2020. Made with &hearts; by <a href="https://delta.nitt.edu">Delta Force</a> & Aaveg Design Team.
        </p>
    </footer>
);

class Appbar extends Component {
    render() {
      return (
        footer
      );
    }
  }
  
  export default Appbar;