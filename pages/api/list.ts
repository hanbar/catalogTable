// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { list } from '../../data/list';
import { Data } from '../../types/DataType';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  const { search } = req.query;
  let result = list;
  if (search) {
    result = list.filter((item) => {
      return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
  res.status(200).json(result);
}
