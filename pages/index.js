import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';

export default function Home() {

  const [profile, setProfile] = useState(null);
  const [getError, setGetError] = useState(false);

  useEffect(() => {

    axios.get(`${process.env.publicUrl}/api/profile-information`).
      then(res => {

        setProfile(res.data);

      }).
      catch(() => setGetError(true));

  }, []);

  return (
    <div className={styles.container}>

      {
        !getError ?
          <div>

            <Head>
              <title>{profile?.title}</title>
              <meta name='description' content="Ali Bahaari's Personal Site" />
            </Head>

            <div className={styles.profileImage}>
              <Image priority={true} src={`/${profile?.avatarName}`} layout='fill' />
            </div>

            <p className={styles.profileName}>
              {profile?.nameFamily}
            </p>

            <p className={styles.profileBiography}>
              {profile?.biography}
            </p>

            <div className={styles.profileSocialNetworks}>

              {profile?.socialNetworks.map(socialNetwork => (
                <a target='blank' href={socialNetwork.link}>{socialNetwork.name}</a>
              ))}

            </div>

          </div>
          :
          <p className={styles.errorText}>Error In Connection.</p>
      }

    </div>
  )
}
