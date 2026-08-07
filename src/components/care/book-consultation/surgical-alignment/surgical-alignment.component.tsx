import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  TextField,
  Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { categories } from './categories';

const SurgicalAlignment = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(categories[4].id);
  const [selectedAilmentId, setSelectedAilmentId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const selectedCategory = categories.find((c) => c.id === selectedCategoryId);

  const filteredAilments = useMemo(() => {
    if (!selectedCategory) return [];
    if (!search.trim()) return selectedCategory.ailments;
    return selectedCategory.ailments.filter((a) =>
      a.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [selectedCategory, search]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setSearch('');
    setSelectedAilmentId(null);
  };

  const handleAilmentClick = (ailmentId: string) => {
    setSelectedAilmentId(ailmentId);
  };

  return (
    <Box>
      <IconButton onClick={() => setOpen(true)}>
        <Typography>Open Dialog</Typography>
      </IconButton>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            py: 3,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <IconButton onClick={() => setOpen(false)} sx={{ position: 'absolute', left: 16 }}>
            <CloseIcon />
          </IconButton>
          <Typography >
            Select your Surgical ailment
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ display: 'flex', height: 500 }}>
            <Box
              sx={{
                width: '45%',
                borderRight: '1px solid',
                borderColor: 'divider',
                overflowY: 'auto',
              }}
            >
              <List disablePadding>
                {categories.map((cat) => (
                  <ListItemButton
                    key={cat.id}
                    selected={cat.id === selectedCategoryId}
                    onClick={() => handleCategoryClick(cat.id)}
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                      '&.Mui-selected': {
                        bgcolor: 'primary.50',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 48 }}>
                      <Avatar src={cat.icon} sx={{ bgcolor: 'grey.100', width: 40, height: 40 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography>{cat.name}</Typography>}
                      secondary={cat.info}
                    />
                    <KeyboardArrowRightIcon fontSize="small" color="disabled" />
                  </ListItemButton>
                ))}
              </List>
            </Box>

            <Box sx={{ width: '55%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder={`Search by ${selectedCategory?.info ?? ''} ailment name`}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Box>

              <List disablePadding sx={{ overflowY: 'auto', flex: 1 }}>
                {filteredAilments.map((ailment) => (
                  <ListItemButton
                    key={ailment.id}
                    onClick={() => handleAilmentClick(ailment.id)}
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 48 }}>
                      <Avatar sx={{ bgcolor: 'grey.100', width: 40, height: 40 }} />
                    </ListItemIcon>
                    <ListItemText primary={ailment.name} />
                    <Radio
                      checked={selectedAilmentId === ailment.id}
                      onChange={() => handleAilmentClick(ailment.id)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </ListItemButton>
                ))}
                {filteredAilments.length === 0 && (
                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Typography color="text.secondary" variant="body2">
                      No results found
                    </Typography>
                  </Box>
                )}
              </List>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SurgicalAlignment;