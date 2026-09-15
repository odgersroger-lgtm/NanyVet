import PublicSite from './public-site';
import {defaults} from '@/lib/content';

export default function Page(){
  return <PublicSite initial={defaults}/>;
}
